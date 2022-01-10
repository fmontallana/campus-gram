import React from 'react'
import FriendList from './FriendList'

function FriendLists() {
    return (
        <div className='side-profile friend-lists'>
            <div className="tab">
                <p className='tab-active mouse-pointer'>My Friends</p>
                <p className='mouse-pointer'>Requests</p>
            </div>
            <div className="friends">
            <FriendList name="James Dela Cruz" username="@JamesDC" photo="https://i.pravatar.cc/50?u=a04258ff4e290250" />
            <FriendList name="Collin Yvette" username="@linncol" photo="https://i.pravatar.cc/50?u=a04281ff4e290250" />
            <FriendList name="Kellie Laila" username="@Lailalala" photo="https://i.pravatar.cc/50?u=a042581ff4e20250" />
            <FriendList name="Camille Louise" username="@Camilloi" photo="https://i.pravatar.cc/50?u=a042581f4e290250" />
            <FriendList name="James Dela Cruz" username="@JamesDC" photo="https://i.pravatar.cc/50?u=a042581ff4e20250" />
            <FriendList name="Collin Yvette" username="@linncol" photo="https://i.pravatar.cc/50?u=a04258ff4e290250" />
            <FriendList name="Kellie Laila" username="@Lailalala" photo="https://i.pravatar.cc/50?u=a042581ff4290250" />
            <FriendList name="James Dela Cruz" username="@JamesDC" photo="https://i.pravatar.cc/50?u=a04251ff4e290250" />
            <FriendList name="Collin Yvette" username="@linncol" photo="https://i.pravatar.cc/50?u=a02581ff4e290250" />
            <FriendList name="Kellie Laila" username="@Lailalala" photo="https://i.pravatar.cc/50?u=a04251ff4e290250" />
            <FriendList name="Lindsey Romilly" username="@Lin463" photo="https://i.pravatar.cc/50?u=a042581ff4e20250" />
            </div>
        </div>
    )
}

export default FriendLists
