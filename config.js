/* Copyright (C) 2025 Codex.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
Codex - Ziyan
*/

const toBool = (x) => x == 'true'
const {
	existsSync
} = require("fs")
const {
	Sequelize
} = require("sequelize");
if (existsSync('config.env')) require('dotenv').config({
	path: './config.env'
})
process.env.NODE_OPTIONS = '--max_old_space_size=2560'
const DB_URL = process.env.DATABASE_URL || '';
module.exports = {
	SESSION_ID: process.env.SESSION_ID || '',
	HEROKU: {
		API_KEY: process.env.HEROKU_API_KEY,
		APP_NAME: process.env.HEROKU_APP_NAME
	},
	PORT: process.env.PORT || 8080,
	TOTAL_FORK: process.env.TOTAL_FORK || "1",
	BASE_URL: process.env.BASE_URL || "https://codexnet.xyz/",
	API_KEY: process.env.API_KEY || "L5Ce7iyZng",
	REPO: process.env.REPO || "mitchchristianoofficial/mitch-christiano-bot",
	BGM_URL: process.env.BGM_URL || "null",
	ANTI_CALL: process.env.ANTI_CALL || 'false', //true,block
	ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
	PM_BLOCK: process.env.PM_BLOCK || "false", //badword, all, spam:10 for spamming 10 block
	BGMBOT: toBool(process.env.BGMBOT || "false"),
	STATUS_VIEW: process.env.STATUS_VIEW || "false",
	SAVE_STATUS: toBool(process.env.SAVE_STATUS || "false"),
	DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
	DISABLE_GRP: toBool(process.env.DISABLE_GRP || "false"),
	ERROR_MSG: toBool(process.env.ERROR_MSG || "true"),
	AJOIN: toBool(process.env.AJOIN || 'false'),
	READ: process.env.READ || "false", //true, command
	CHATBOT: process.env.CHATBOT || "false",
	REACT: process.env.REACT || "false", //true, command, emoji
	WARNCOUNT: process.env.WARNCOUNT || 5,
	BOT_INFO: process.env.BOT_INFO || "MITCH CHRISTIANO;Mitch Christiano Okumu",
	WORKTYPE: process.env.WORKTYPE || "public",
	PREFIX: process.env.PREFIX || "[.,!]", //both  .  and [.] equal, for multi prefix we use [] this
	PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || "null",
	BOT_PRESENCE: process.env.BOT_PRESENCE || "unavailable",
	AUDIO_DATA: process.env.AUDIO_DATA || "MITCH CHRISTIANO;Mitch Christiano Okumu",
	STICKER_DATA: process.env.STICKER_DATA || "MITCH CHRISTIANO;Mitch Christiano",
	LIST_TYPE: process.env.LIST_TYPE || 'poll', //list, reaction 
	LINK_PREVIEW: process.env.LINK_PREVIEW || 'false', //you can use "false" alslo
	API_TYPE: process.env.API_TYPE || 'all', //unique
	BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
	SUDO: process.env.SUDO || "null",
	RMBG_KEY: process.env.RMBG_KEY,
	OPEN_AI: process.env.OPEN_AI,
	ELEVENLABS: process.env.ELEVENLABS || "",
	OCR_KEY: (process.env.OCR_KEY || 'K84003107488957').trim(),
	LANGUAGE: process.env.LANGUAGE || 'english',
	OWNER_NAME: process.env.OWNER_NAME || "Mitch Christiano Okumu",
	OWNER_EMAIL: process.env.OWNER_EMAIL || "mitchchristianoofficial@gmail.com",
	OWNER_EMAIL_2: process.env.OWNER_EMAIL_2 || "christianomitch832@gmail.com",
	FOUNDATION_NAME: process.env.FOUNDATION_NAME || "THE TRANSITION FOUNDATION",
	FOUNDATION_MOTTO: process.env.FOUNDATION_MOTTO || "Transforming today, Building Tomorrow.",
	DATABASE: DB_URL ? new Sequelize(DB_URL, {
		dialect: 'postgres',
		ssl: true,
		protocol: 'postgres',
		dialectOptions: {
			native: true,
			ssl: {
				require: true,
				rejectUnauthorized: false
			}
		},
		logging: false
	}) : new Sequelize({
		dialect: 'sqlite',
		storage: './database.db',
		logging: false
	})
};
