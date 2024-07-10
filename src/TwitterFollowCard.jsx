import{userState} from 'react'

export function TwitterFollowCard({
  children,
  userName = "unknown",
  isFollowing,
}) {
  const state = userState(isFollowing);

  const text = isFollowing ? "siguiendo" : "seguir";

  const buttonClassName = isFollowing
    ? "tw-followcard-button is-following"
    : "tw-followcard-button";

  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img
          className="tw-followcard-avatar"
          alt="mi foto de twitter : P"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followcard-info">
          <strong className="tw-followcard-infoUser">{children}</strong>
          <span className="tw-followcard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}
