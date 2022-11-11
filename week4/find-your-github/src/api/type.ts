
export interface UserProfileProps {
	login: string;
	name: string;
	avatar_url: string;
	gitHubUrl: string;
	following: number;
	followers: number;
	public_repos: number;
}

export interface HistoryListProps{
	[id: number]: string,
}
