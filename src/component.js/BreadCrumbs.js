
import { Link, useLocation } from 'react-router-dom';

export default function BreadCrumbs() {
    const location =useLocation();
    // console.log(location)
    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
      // currentLink =currentLink + `/${crumb}`
      return (
        <div className=' crumb flex ml-3 border-b border-white hover:text-orange-500  ' key={crumb}>
          <Link to={currentLink}>{crumb}</Link>           
        </div>
      )
    })

  return (
    <div className='braedcrumbs text-white px-16 py-3 flex '>
      {crumbs}     
    </div>
  )
}
