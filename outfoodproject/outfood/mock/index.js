import Mock from 'mockjs'
import data from '../data.json'


Mock.mock('/good/seller',{
    code:0,
    codemsg:'sucsess',
    data:data.seller
})

Mock.mock('/good/goods',{
    code:0,
    codemsg:'sucsess',
    data:data.goods
})

Mock.mock('/good/ratings',{
    code:0,
    codemsg:'sucsess',
    data:data.ratings
})