/*It takes post (whole string) and creates two arrays. [firstFourWords] and [rest (of words)].*/
/*It maps through array and returns array of object (words) with isColored: boolean*/
/*It returns whole array of object (all words of post) and on Component - on this array is used map and eventually returns span with color styling*/

//Function for Post Component
const wordColorPost = (post: string) => {
    const arr = post.split(" ");
    const arrOfFirstFourWords = arr.slice(0, 4);
        
    const firstFourWithColor = arrOfFirstFourWords.map((word) => {
        if (word === "papierosa" || word === "papierosa..." || word === "czekoladę" || word === "czekoladę...") {
                return {isColored: true, value: `${word} `};
        } else {
                return {isColored: false, value: `${word} `};
        };
    })
    const rest = post.split(" ").slice(4).map(word => {return {isColored: false, value: `${word} `}});
        const allWords = firstFourWithColor.concat(rest)

        return allWords;
    };

export default wordColorPost;