import './Menu.css';
export function Menu({list, dep, changeActivePath, activePath, checkedList}) {
    const renderMore = (list, dep)=> {
        let moreList = []
        for (let i = 0; i < list.length; i++) {
            const el = list[i];
            if(el.id === activePath[dep]) {
                moreList = el.children
            }
            
        }
        if(Array.isArray(moreList)&&moreList.length>0) {
            return (
                <Menu list={moreList} dep={dep+1} changeActivePath={changeActivePath} activePath={activePath}>
                </Menu>
            )
        }
    }
    return (
        <div style={{display: 'flex'}}>
            <ul className='list'>
            {
                list.map(item=>{
                    return (
                        <li key={item.id} onClick={()=>{
                            changeActivePath(dep, item.id, list)
                        }} className={activePath.includes(item.id)?'active': ''}>
                            <input type='checkbox' checked={activePath.includes(item.id)}></input>{item.name}
                        </li>
                    )
                })
            }
            </ul>
            {
                renderMore(list, dep)
            }
        </div>
    )
}