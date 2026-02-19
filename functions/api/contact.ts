interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const onRequestPost = async (context: { request: Request }): Promise<Response> => {
  try {
    const body = (await context.request.json()) as ContactBody;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const mailchannelsPayload = {
      personalizations: [
        {
          to: [{ email: 'thomas.walker.powell@gmail.com', name: 'Thomas Powell' }],
          reply_to: { email, name },
        },
      ],
      from: { email: 'noreply@thomaspowell.dev', name: 'thomaspowell.dev Contact Form' },
      subject: `website: ${subject}`,
      content: [
        {
          type: 'text/plain',
          value: `From: ${name} <${email}>\n\n${message}`,
        },
      ],
    };

    const res = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailchannelsPayload),
    });

    if (res.status === 202 || res.status === 200) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const errText = await res.text();
    return new Response(JSON.stringify({ success: false, error: errText }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
