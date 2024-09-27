import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import cholebhature from '../media/food/chole bhature.jpg'
import rogan from '../media/food/roganjosh.jpg'
import rajmachawal from '../media/food/rajma chawal.webp'
import parathas from '../media/food/parathas.jpg'





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: props => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)'),
}));

export default function ImmersiveExperience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const localIndianFoods = {
    title: "Popular Local Foods of India",
    description: "Discover the most beloved and iconic dishes from various regions across India. Each dish is a reflection of the local culture and flavors.",
    regions: [
      {
        region: "North India",
        popularFoods: [
          {
            id: 1,
            name: "Chole Bhature",
            origin: "Punjab",
            ingredients: ["Chickpeas", "Flour", "Yogurt", "Spices"],
            price: 150,
          imageUrl: cholebhature,
          },
          {
            id: 2,
            name: "Rogan Josh",
            origin: "Kashmir",
            ingredients: ["Mutton", "Yogurt", "Spices", "Ghee"],
            price: 350,
            imageUrl: rogan,
          },
          {
            id: 3,
            name: "Rajma Chawal",
            origin: "Punjab",
            ingredients: ["Kidney Beans", "Rice", "Tomatoes", "Spices"],
            price: 120,
            imageUrl: rajmachawal,
          },
          {
            id: 4,
            name: "Paratha",
            origin: "Uttar Pradesh",
            ingredients: ["Wheat Flour", "Ghee", "Potato", "Spices"],
            price: 80,
            imageUrl: parathas,
          }
        ]
      },
      {
        region: "South India",
        popularFoods: [
          {
            id: 5,
            name: "Idli Sambar",
            origin: "Tamil Nadu",
            ingredients: ["Rice", "Lentils", "Spices", "Vegetables"],
            price: 80,
            imageUrl: "../media/food/idli_sambar.jpg",
          },
          {
            id: 6,
            name: "Appam with Stew",
            origin: "Kerala",
            ingredients: ["Rice Flour", "Coconut Milk", "Vegetables", "Spices"],
            price: 120,
            imageUrl: "../media/food/appam_stew.jpg",
          },
          {
            id: 7,
            name: "Hyderabadi Biryani",
            origin: "Telangana",
            ingredients: ["Basmati Rice", "Chicken/Mutton", "Yogurt", "Spices", "Saffron"],
            price: 250,
            imageUrl: "../media/food/hyderabadi_biryani.jpg",
          },
          {
            id: 8,
            name: "Pongal",
            origin: "Tamil Nadu",
            ingredients: ["Rice", "Lentils", "Ghee", "Pepper", "Cumin"],
            price: 100,
            imageUrl: "../media/food/pongal.jpg",
          }
        ]
      },
      {
        region: "West India",
        popularFoods: [
          {
            id: 9,
            name: "Vada Pav",
            origin: "Maharashtra",
            ingredients: ["Potato", "Chickpea Flour", "Bread", "Spices"],
            price: 50,
            imageUrl: "../media/food/vada_pav.jpg",
          },
          {
            id: 10,
            name: "Dhokla",
            origin: "Gujarat",
            ingredients: ["Rice", "Chickpea Flour", "Yogurt", "Spices"],
            price: 100,
            imageUrl: "../media/food/dhokla.jpg",
          },
          {
            id: 11,
            name: "Goan Fish Curry",
            origin: "Goa",
            ingredients: ["Fish", "Coconut", "Tamarind", "Spices"],
            price: 200,
            imageUrl: "../media/food/goan_fish_curry.jpg",
          },
          {
            id: 12,
            name: "Misal Pav",
            origin: "Maharashtra",
            ingredients: ["Sprouted Lentils", "Pav", "Onions", "Tomatoes", "Spices"],
            price: 80,
            imageUrl: "../media/food/misal_pav.jpg",
          }
        ]
      },
      {
        region: "East India",
        popularFoods: [
          {
            id: 13,
            name: "Macher Jhol",
            origin: "West Bengal",
            ingredients: ["Fish", "Potatoes", "Tomatoes", "Spices"],
            price: 200,
            imageUrl: "../media/food/macher_jhol.jpg",
          },
          {
            id: 14,
            name: "Momos",
            origin: "Sikkim",
            ingredients: ["Flour", "Vegetables", "Meat", "Spices"],
            price: 100,
            imageUrl: "../media/food/momos.jpg",
          },
          {
            id: 15,
            name: "Litti Chokha",
            origin: "Bihar",
            ingredients: ["Wheat Flour", "Gram Flour", "Eggplant", "Potato", "Spices"],
            price: 60,
            imageUrl: "../media/food/litti_chokha.jpg",
          },
          {
            id: 16,
            name: "Pakhala Bhata",
            origin: "Odisha",
            ingredients: ["Rice", "Yogurt", "Water", "Cumin", "Green Chilies"],
            price: 50,
            imageUrl: "../media/food/pakhala_bhata.jpg",
          }
        ]
      },
      {
        region: "Central India",
        popularFoods: [
          {
            id: 17,
            name: "Poha",
            origin: "Madhya Pradesh",
            ingredients: ["Flattened Rice", "Onions", "Peanuts", "Spices"],
            price: 40,
            imageUrl: "../media/food/poha.jpg",
          },
          {
            id: 18,
            name: "Bhutte Ka Kees",
            origin: "Madhya Pradesh",
            ingredients: ["Corn", "Milk", "Ghee", "Spices"],
            price: 70,
            imageUrl: "../media/food/bhutte_ka_kees.jpg",
          },
          {
            id: 19,
            name: "Dal Bafla",
            origin: "Madhya Pradesh",
            ingredients: ["Wheat Flour", "Ghee", "Lentils", "Spices"],
            price: 150,
            imageUrl: "../media/food/dal_bafla.jpg",
          },
          {
            id: 20,
            name: "Sabudana Khichdi",
            origin: "Maharashtra/Madhya Pradesh",
            ingredients: ["Sago", "Peanuts", "Potatoes", "Spices"],
            price: 90,
            imageUrl: "../media/food/sabudana_khichdi.jpg",
          }
        ]
      }
    ],
    contactInfo: {
      phone: "+91-9876543210",
      email: "info@localindianfoods.com",
    }
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {localIndianFoods.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {localIndianFoods.description}
      </Typography>

      {localIndianFoods.regions.map((region, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            {region.region}
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {region.popularFoods.map(food => (
              <Card key={food.id} sx={{ width: 345, maxWidth: 345 }}>
                <CardHeader
             
                   
       
                
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={food.name}
                  subheader={`Origin: ${food.origin}`}
                />
                <CardMedia
                  component="img"
                  height="290"
                  image={food.imageUrl}
                  alt={food.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Ingredients: {food.ingredients.join(', ')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{food.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {/* Add any additional details here */}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <footer style={{ marginTop: '20px' }}>
        <Typography variant="body2">
          Contact us: {localIndianFoods.contactInfo.phone} | {localIndianFoods.contactInfo.email}
        </Typography>
      </footer>
    </div>
  );
}
