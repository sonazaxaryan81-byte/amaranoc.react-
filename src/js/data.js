const photos = [
'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85'
];
const names = ['Բջնի 6','Բջնի 25','Ապարան 3','Ծաղկաձոր 20','Պտղնի 30','Բյուրական 4','Ծաղկաձոր 18','Օհանավան 40','Դսեղ 6','Դսեղ 4','Աղվերան 3','Աղվերան 4','Էջմիածին 60','Դիլիջան 20','Զովունի 40','Դիլիջան 18','Դիլիջան 6','Ապարան 2','Աբովյան 30','Գառնի 50','Արզական 25','Ջերմուկ 4','Ջերմուկ 2','Երևան 100','Պտղնի 40','Ծաղկաձոր 4','Ակունք 25','Աշտարակ 60','Դիլիջան 4','Ապարան 8','Բջնի 12','Գառնի 10'];
const places = ['Բջնի','Բջնի','Ապարան','Ծաղկաձոր','Պտղնի','Բյուրական','Ծաղկաձոր','Օհանավան','Դսեղ','Դսեղ','Աղվերան','Աղվերան','Էջմիածին','Դիլիջան','Զովունի','Դիլիջան','Դիլիջան','Ապարան','Աբովյան','Գառնի','Արզական','Ջերմուկ','Ջերմուկ','Երևան','Պտղնի','Ծաղկաձոր','Ակունք','Աշտարակ','Դիլիջան','Ապարան','Բջնի','Գառնի'];
const prices = [45000,75000,50000,130000,90000,39000,80000,60000,30000,20000,70000,40000,70000,150000,50000,35000,40000,58000,90000,60000,25000,50000,50000,120000,120000,45000,45000,75000,35000,65000,55000,42000];
const guests = [6,25,3,20,30,4,18,40,6,4,3,4,60,20,40,18,6,2,30,50,25,4,2,100,40,4,25,60,4,8,12,10];
export const listings = names.map((name,i)=>({
 id:i+1,name,place:places[i],price:prices[i],guests:guests[i],overnight:Math.max(2,Math.round(guests[i]*.65)),
 image:photos[i%photos.length],featured:i<8,
 type:i%3===0?'villa':i%3===1?'cottage':'house',
 amenities:['pool',...(i%2===0?['sauna']:[]),'wifi','bbq',...(i%3===0?['mountain']:[])],
 rating:(4.5+(i%5)*.1).toFixed(1),rooms:Math.max(2,Math.round(guests[i]/5))
}));
