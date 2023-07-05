class Movie{
    constructor(title,studio,rating){
        this.Name=title;
        this.production=studio;
        this.Review=rating||"PG";
    }
    getPG(Movies){
        let PGMoviesArr=[];
        for(let key of Movies){
            if(key.rating==='PG'){
                PGMoviesArr.push(key);
            }
        }
        return PGMoviesArr;
    }
}
let Flim=new Movie("Casino Royale","Eon Productions","PG13");
console.log(Flim);
