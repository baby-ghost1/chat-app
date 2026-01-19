/* export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background: linear-gradient(to right, #36D1DC, #5B86E5); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">Welcome to Messenger!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #5B86E5;"><strong>Hello ${name},</strong></p>
      <p>We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.</p>
      
      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #36D1DC;">
        <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>Get started in just a few steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Set up your profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a conversation</li>
          <li style="margin-bottom: 0;">Share photos, videos, and more</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} style="background: linear-gradient(to right, #36D1DC, #5B86E5); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">Open Messenger</a>
      </div>
      
      <p style="margin-bottom: 5px;">If you need any help or have questions, we're always here to assist you.</p>
      <p style="margin-top: 0;">Happy messaging!</p>
      
      <p style="margin-top: 25px; margin-bottom: 0;">Best regards,<br>The Messenger Team</p>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
      <p>© 2025 Messenger. All rights reserved.</p>
      <p>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Terms of Service</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Contact Us</a>
      </p>
    </div>
  </body>
  </html>
  `;
} */



export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Messenger</title>
</head>

<body style="margin:0; padding:0; background-color:#f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#333;">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6; padding:30px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #36D1DC, #5B86E5); padding:40px 20px;">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
                alt="Messenger Logo"
                width="90"
                height="90"
                style="border-radius:50%; background-color:#ffffff; padding:10px; display:block; margin-bottom:20px;"
              />
              <h1 style="margin:0; font-size:28px; color:#ffffff; font-weight:600;">
                Welcome to Messenger 🎉
              </h1>
              <p style="margin:10px 0 0; font-size:15px; color:#eaf3ff;">
                Fast • Secure • Real-time messaging
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px 30px;">
              <p style="font-size:18px; margin-top:0;">
                Hi <strong style="color:#5B86E5;">${name}</strong>,
              </p>

              <p style="font-size:15px; line-height:1.7;">
                We’re thrilled to have you onboard! Messenger helps you stay connected with the people who matter — anytime, anywhere.
              </p>

              <!-- Steps Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-left:4px solid #36D1DC; border-radius:10px; margin:25px 0;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 12px; font-weight:600;">
                      🚀 Get started quickly:
                    </p>
                    <ul style="padding-left:18px; margin:0; font-size:14px; line-height:1.6;">
                      <li>Upload a profile picture</li>
                      <li>Find & add your contacts</li>
                      <li>Start chatting instantly</li>
                      <li>Share photos, videos & files</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:25px 0;">
                    <a href="${clientURL}"
                      style="background: linear-gradient(135deg, #36D1DC, #5B86E5);
                             color:#ffffff;
                             text-decoration:none;
                             padding:14px 36px;
                             border-radius:999px;
                             font-size:15px;
                             font-weight:600;
                             display:inline-block;">
                      Open Messenger
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px; color:#555;">
                Need help? Just reply to this email — we’re always happy to assist 🙂
              </p>

              <p style="margin-top:25px; font-size:14px;">
                Cheers,<br />
                <strong>The Messenger Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:#f9fafb; padding:20px; font-size:12px; color:#888;">
              <p style="margin:0;">© 2025 Messenger. All rights reserved.</p>
              <p style="margin:8px 0 0;">
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Privacy</a> |
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Terms</a> |
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Support</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- End Container -->

      </td>
    </tr>
  </table>

</body>
</html>
`;
}
