function IdolChat({ name }) {

    return (
        <div>
            <iframe id="twitch-chat-embed"
                src={`https://www.twitch.tv/embed/${name}/chat?parent=localhost`}
                height="360"
                width="280">
            </iframe>
        </div>
    )
}

export default IdolChat;