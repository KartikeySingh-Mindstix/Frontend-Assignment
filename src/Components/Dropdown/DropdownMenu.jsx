import React from 'react';
import './DropdownMenu.css';

// const data = {
//     // left: [
//     //   // { title: 'FEATURED', items: ['Online Exclusives', 'Essentials', 'Samba, Gazelle, Spezial', 'Stan Smith', 'Football', 'Sportswear', 'Personalizable Products', 'Outlet'] },
//     // ],
//     center: [
//       { title: 'Type1', image: '', subcategories: [{}] },
//       { title: 'Type2', image: '', subcategories: [{}] },
//       { title: 'Type3', image: '', subcategories: [{}] },
//     ],
//     right: [
//       { title: 'SPORTS', image: '/path-to-sports-image.png', subcategories: ['Football', 'Running', 'Swimming', 'Cricket', 'Basketball', 'Tennis', 'Training'] },
//     ],
//   };

const dropdown = {
  type: "megalist",
  button: {
    title: "title",
    url: "url"
  },
  data: [
    {
      title: 'Type1',
      subcategories: [{
        title: "title-1",
        url: ""
      }],

      tag: {

      }
    },
  ]
}


const DropdownMenu = () => {
  return (
    <div className="dropdown_container">
      <div className="dropdown_btn">
        <div>Link</div>
      </div>
      <div className="dropdown_menu">
        <div className="dropdown_menu_items">
          <div className="menu_title">Title Here</div>
          <div className="menu_items">
            <div>Item-1</div>
            <div>Item-1</div>
            <div>Item-1</div>
          </div>
          <div className='end_tag'>All Tags</div>
        </div>
        <div className="dropdown_menu_items">
          <div className="menu_title">Title Here</div>
          <div className="menu_items">
            <div>Item-1</div>
            <div>Item-1</div>
            <div>Item-1</div>
          </div>
          <div className='end_tag'>All Tags</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
