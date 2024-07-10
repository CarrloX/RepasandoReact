export function TwitterFollowCard({userName, name,isFollowing}) {
    console.log(isFollowing)
    
    return (
        <article className="tw-followcard">
        <header className="tw-followcard-header">
          <img
            className="tw-followcard-avatar"
            alt="mi foto de twitter : P"
            src={`https://unavatar.io/${userName}`}
          />
          <div className="tw-followcard-info">
            <strong className="tw-followcard-infoUser">{name}</strong>
            <span className="tw-followcard-infoUserName">@{userName}</span>
          </div>
        </header>
  
        <aside>
          <button className="tw-followcard-button">
              seguir
          </button>
        </aside>
      </article>
    )
}