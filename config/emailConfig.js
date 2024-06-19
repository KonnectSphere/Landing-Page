// config/emailConfig.js
const clientEmailConfig = {
    subject: 'Welcome to KonnectSphere!',
    text: (name) => `
        Dear ${name},

        Thank you for signing up with KonnectSphere! We're excited to welcome you to our community of businesses looking to harness the power of influencer marketing.
        Stay tuned - you'll be hearing from us soon with valuable information and updates to help you connect with the right influencers and amplify your brand.
        In the meantime, feel free to explore our website at http://konnectsphere.com/ to learn more about our platform.

        Welcome aboard!

        Sincerely,
        The KonnectSphere Team
    `
};

const influencerEmailConfig = {
    subject: 'Welcome to KonnectSphere, Creator!',
    text: (name) => `
        Hey ${name},

        Thanks for joining KonnectSphere! We're thrilled to have you on board as we connect brands with talented creators like yourself.
        KonnectSphere is your platform to showcase your skills and connect with exciting brand collaborations. We make influencer marketing smoother and more rewarding.
        Stay tuned - you'll be hearing from us soon with exclusive opportunities to partner with brands that align with your content and audience.
        In the meantime, head over to our website http://konnectsphere.com/ to explore more about KonnectSphere.
        Get ready to amplify your influence and connect with the brands you love!

        Welcome to the KonnectSphere community!
        The KonnectSphere Team
    `
};

module.exports = {
    clientEmailConfig,
    influencerEmailConfig
};
