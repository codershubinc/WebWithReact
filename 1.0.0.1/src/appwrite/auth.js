import conf from '../conf/conf.js';
import { Client, Account, ID, Avatars, } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.avatars = new Avatars(this.client)

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async getUserIdentity() {
        try {
            return await this.account.listIdentities(['type=email'])
        } catch (error) {
            console.log("Appwrite serive :: getUserIdentity :: error", error);
        }
    }

    async getBrowserAvatar() {
        return this.avatars.getInitials(
            'SW', // name (optional)
            0, // width (optional)
            0, // height (optional)
            '#94a3b8' // background (optional)
        );
    }

    async updatePreferences() {
        return this.account.updatePrefs({
            'theme': 'dark',
            'language': 'en',
        });
    }
    async getPreferences() {
        return this.account.getPrefs( );
    }
}

const authService = new AuthService();

export default authService


