export const verifyEmailTemplate = (email, sixDigitCode) => {
  return {
    from: '"toktok admin" <admin@toktok.com>',
    to: email,
    subject: 'verify your email on toktok',
    text: `
        hi toktok user!
        pls enter the following code to verify your email and proceed with the registration: ${sixDigitCode}.
        the code will be valid for 5 minutes. LG, toktok admin`,
    html: `
        <div style='font-family: system-ui, -apple-system, sans-serif, Arial'>
        <h2>hi toktok user!</h2>
        <p>pls enter the following code to verify your email and proceed with the registration:</p>
        <p style='
        font-family: monospace, Courier;
        letter-spacing: 5px;
        border: 1px solid black;
        width: fit-content;
        padding: 5px;'>${sixDigitCode}</p>
        <p>the code will be valid for 5 minutes.</p>
        <p>LG, toktok admin</p>
        </div>`,
  };
};
