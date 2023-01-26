const productos= [
    {id: 1, categoria: 'Monitor', precio: 20000},
    {id:2, categoria: 'SillaGamer', precio: 1000},
    {id:3, categoria: 'Pc', precio: 2000}
];

export const getFech = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})