// 餐品数据
const foodList = [
    {
        id: 1,
        name: '招牌牛肉汉堡',
        description: '精选优质牛肉，搭配新鲜蔬菜和特制酱料',
        price: 38,
        image: 'https://img.freepik.com/free-photo/burger-with-melted-cheese_144627-37993.jpg'
    },
    {
        id: 2,
        name: '香辣鸡腿堡',
        description: '酥脆鸡腿肉，微辣口感，适合喜欢辣味的你',
        price: 32,
        image: 'https://img.freepik.com/free-photo/fried-chicken-burger-with-lettuce-tomato_1339-80455.jpg'
    },
    {
        id: 3,
        name: '鲜虾沙拉',
        description: '新鲜虾仁配多种时令蔬菜，健康低卡路里',
        price: 28,
        image: 'https://img.freepik.com/free-photo/shrimp-salad-with-lettuce-cucumber-tomato_140725-1016.jpg'
    },
    {
        id: 4,
        name: '薯条套餐',
        description: '金黄酥脆薯条配番茄酱，经典搭配',
        price: 18,
        image: 'https://img.freepik.com/free-photo/french-fries-with-ketchup_144627-27296.jpg'
    },
    {
        id: 5,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 6,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 7,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 8,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 9,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 10,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 11,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    },
     {
        id: 12,
        name: '冰爽可乐',
        description: '冰镇可口可乐，解渴必备',
        price: 10,
        image: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice_144627-16201.jpg'
    }
];

// 加载餐品列表
document.addEventListener('DOMContentLoaded', function () {
    const foodListContainer = document.getElementById('foodList');

    foodList.forEach(food => {
       const foodCard = `
            <div class="col-6 col-sm-4 col-md-3 col-xl-2 mb-4"> <!-- 移除了mb-4，改用CSS控制 -->
                <div class="card food-card h-100 border-0">
                    <div class="food-img-container">
                        <img src="${food.image}" class="food-img" alt="${food.name}" loading="lazy">
                    </div>
                    <div class="card-body p-2">
                        <h5 class="card-title food-name mb-1">${food.name}</h5>
                        <p class="card-text food-desc mb-1">${food.description}</p>
                        <p class="food-price mb-0">¥${food.price}</p>
                    </div>
                </div>
            </div>
            `;
        foodListContainer.innerHTML += foodCard;
    });
});