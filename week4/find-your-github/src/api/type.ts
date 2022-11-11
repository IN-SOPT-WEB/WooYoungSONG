
export interface UserProfileProps {
	login: string;
	name: string;
	avatar_url: string;
	gitHubUrl: string;
	following: number;
	followers: number;
	public_repos: number;
}

export interface HistoryItemProps{
	id : number;
	text : string;
}
