const btn = document.getElementById('btn');
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");
btn.addEventListener("click", async function(){
    try
    {
        const response = await fetch("https://picsum.photos/200/300");
        animeContainer.style.display = "block";
        if(response.ok)
        {
            animeImg.src = response.url;
        }
        else
        {
            console.error(`Failed to fetch image. Status: ${response.status}`);
        }
    }
    catch(error)
    {
        console.error("Error fetching image:", error);
    }
    }
)