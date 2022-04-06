const groupsListHTML = groupsList.map((it, i) => {
    return (
        <div>
        <Group key={i} it={it} />


        <div className="group-box" key={i}>
            <p>Name: {it.name}</p>
            <p>Subject: {it.subject}</p>
            <p>Description: {it.description}</p>
            <div>{it.members.map((member, id) => {
                return (
                    <div className="member" key={id}>
                        <p>Name: {member.name}</p>
                        <p>Role: {member.role}</p>
                    </div>
                )}
                )}
            </div>
        </div>
        </div>
    );
})


///////////////////////////////////////////////////
<SearchGroups></SearchGroups> => <SearchGroups />
<NavBar></NavBar>
/////////////////////////////////////
