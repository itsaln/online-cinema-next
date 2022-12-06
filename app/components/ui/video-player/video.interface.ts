export interface IVideoPlayer {
	videoSource: string
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
}
