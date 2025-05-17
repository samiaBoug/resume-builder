const mongoose = require('mongoose');
const ResumeShcema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    thumbnailLink: { type: String },
    template: { theme: String, colorPalette: [String] },
    profilInfo: {
        profilPreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String
    },
    contactInfo :{
        email: String,
        phone: String,
        location: String,
        website: String,
        linkedIn: String,
        github: String
    },
    workExperience: [{
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        description: String,
        location: String,
    }],
    education: [{
        institution: String,
        degree: String,
        startDate: String,
        endDate: String,
        description: String,
        location: String,
    }],
    skills: [{
        skill: String,
        progress: Number
    }],
    projects: [{
        title: String,
        description: String,
        github: String,
        technologies: [String]
    }],
    certifications: [{
        title: String,
        issuer: String,
        year: String,
        description: String
    }],
    languages: [{
        name: String,
        progress : Number
    }]
},
    {
        timestamps: {
        createdAt: " createdAt", updatedAt: "updatedAt"
    } }
);
module.exports = mongoose.model('Resume', ResumeShcema);