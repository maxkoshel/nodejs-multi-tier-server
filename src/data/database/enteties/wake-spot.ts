import mongoose from 'mongoose';

export const WakeSpotSchema = new mongoose.Schema({
    address: {
        type: [String],
        minlength: 60,
        maxlength: 480,
        required: true,
    },
    extraServices: {
        type: [String],
        maxlength: 120,
    },
    info: {
        type: [String],
        maxlength: 1000,
    },
    name: {
        type: String,
        required: true,
    },
    phones: {
        type: [Number],
        minlength: 11,
        maxlength: 11,
        required: true,
    },
    photos: [String],
    point: {
        lat: {
            type: Number,
            maxlength: 8,
            required: true,
        },
        lng: {
            type: Number,
            maxlength: 8,
            required: true,
        },
    },
    route: {
        type: String,
        maxlength: 320,
    },
    seasonTime: {
        start: Date,
        end: Date,
    },
    social: {
        type: [String],
        maxlength: 320,
    },
    title: {
        type: String,
        maxlength: 320,
    },
    websites: {
        type: [String],
        maxlength: 240,
    },
    workingStatus: {
        type: String,
        enum: ['active', 'inactive', 'repair', 'unknown'],
        required: true,
    },
    workingTime: {
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
    },

    // TODO: использовать "enum" значения.
    badges: { type: [String] },
    features: { type: [String] },
    services: [String],
    type: { type: [String] },
});

export const WakeSpotDao = mongoose.model('WakeSpot', WakeSpotSchema);
