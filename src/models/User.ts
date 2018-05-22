
export { User }

class User {
    constructor() {
        this.login = '';
        this.id = 0;
        this.avatar_url = '';
        this.gravatar_id = '';
        this.url = '';
        this.html_url = '';
        this.followers_url = '';
        this.following_url = '';
        this.gists_url = '';
        this.starred_url = '';
        this.subscriptions_url = '';
        this.organizations_url = '';
        this.repos_url = '';
        this.events_url = '';
        this.received_events_url = '';
        this.type = '';
        this.site_admin = false;
        this.score = 0;
    }

    public login: string;
    public id: number;
    public avatar_url: string;
    public gravatar_id: string;
    public url: string;
    public html_url: string;
    public followers_url: string;
    public following_url: string;
    public gists_url: string;
    public starred_url: string;
    public subscriptions_url: string;
    public organizations_url: string;
    public repos_url: string;
    public events_url: string;
    public received_events_url: string;
    public type: string;
    public site_admin: boolean;
    public score: number;
}




