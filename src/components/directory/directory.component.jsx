import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {

    constructor() {
        super();
        
        
        this.state = {
            sections:[
                {
                  title: 'Tech',
                  imageUrl: 'https://images.freeimages.com/images/large-previews/cda/technology-2-1464895.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Holiday Best!',
                  imageUrl: 'https://images.freeimages.com/images/large-previews/77a/holiday-warmth-1515015.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Pet Supplies',
                  imageUrl: 'https://pikwizard.com/photos/dog-pet-animal-photo-shoot--8c12178adbe9fa5d2f8c502f49b66ea6-m.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Womens Fashion',
                  imageUrl: 'https://media.istockphoto.com/photos/beautiful-mixes-race-woman-holding-shopping-bags-and-smiling-picture-id1063212632',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Mens Fashion',
                  imageUrl: 'https://as1.ftcdn.net/jpg/02/15/94/64/500_F_215946439_qp3reWzAvD1JQQAgJKbQw8eRgwdNWYgC.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                {
                  title: 'Medical Supplies',
                  imageUrl: 'https://as2.ftcdn.net/jpg/02/81/42/77/500_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
                  id: 6,
                  linkUrl: 'shop/sneakers',
                  size: 'large'
                },
                {
                  title: 'Explore All Other Options',
                  imageUrl: 'https://as1.ftcdn.net/jpg/03/83/17/66/500_F_383176600_22Ih3W2tkpRPaTtxwB906MvrqkW2YsEQ.jpg',
                  id: 7,
                  linkUrl: 'shop/sneakers'
                }
              ]
        }
    }

    render () {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }



}

export default Directory