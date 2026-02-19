interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  const json = (obj: unknown, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  try {
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return json({ success: false, error: 'Server misconfiguration: missing API key' }, 500);
    }

    const body = (await context.request.json()) as ContactBody;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return json({ success: false, error: 'Missing fields' }, 400);
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['thomas.walker.powell@gmail.com'],
        reply_to: email,
        subject: `website: ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (res.ok) {
      return json({ success: true });
    }

    const err = await res.text();
    return json({ success: false, error: err }, 500);
  } catch (err) {
    return json({ success: false, error: String(err) }, 500);
  }
};
