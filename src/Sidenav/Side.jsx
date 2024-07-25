import classes from './Sidenav.module.css'


export default function Sidenav() {
    
    return(
        
    <div className={classes.sidenav}>
        <a href="/main/index.html"><img src="/free-icon-home-button-6490332.png" alt=""/></a>
        <a href="/main/settings.html"><img src="/free-icon-settings-126472.png" alt=""/></a>
        <a href="/main/friends.html"><img src="/free-icon-people-6647733.png" alt=""/></a>
        <a href="/main/search.html"><img src="/free-icon-search-magnifier-symbol-of-interface-51658.png" alt=""/></a>
        <a href="/main/chats.html"><img src="/free-icon-chat-134808.png" alt=""/></a>
        <a href="#"><img src="/images/free-icon-exit-402718.png" alt=""/></a>
    </div>
    )
}