const calcTime = (timestamp) => {
    const curTime = new Date().getTime() -9 *60 * 60 * 1000;
    const time = new Date(curTime - timestamp); 
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    if (hour > 0) return `${hour}시간 전`;
    else if (minute > 0)return `${minute}분 전`;
    else if (second > 0)return `${second}초 전`;
    else return '방금 전';
};


const renderData = (data) => {
    const main = document.querySelector("main");
    data.reverse().forEach(async(obj) => {
        const div = document.createElement("div");
        div.className = "item-list";

        const imageDiv = document.createElement("div");
        imageDiv.className ="item-list__img";

        const img = document.createElement("img");
        const res = await fetch(`/images/${obj.id}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        img.src=url;

        const ListInfoDiv = document.createElement("div");
        ListInfoDiv.className = "item-list__info";

        const ListInfoTitleDiv = document.createElement("div");
        ListInfoTitleDiv.className = "item-list__info-title";
        ListInfoTitleDiv.innerText = obj.title;

        const ListInfoMetaDiv = document.createElement("div");
        ListInfoMetaDiv.className = "item-list__info-meta";
        ListInfoMetaDiv.innerText = obj.place +"  "+calcTime(obj.insertAT);
        
        const ListInfoPriceDiv = document.createElement("div");
        ListInfoPriceDiv.className = "item-list__info-price";
        ListInfoPriceDiv.innerText = obj.price;

        imageDiv.appendChild(img);

        ListInfoDiv.appendChild(ListInfoTitleDiv);
        ListInfoDiv.appendChild(ListInfoMetaDiv);
        ListInfoDiv.appendChild(ListInfoPriceDiv);
        div.appendChild(imageDiv)
        div.appendChild(ListInfoDiv)
        main.appendChild(div);
    });
};

const fetchList = async() => {
    const res = await fetch('/items');
    const data = await res.json();
    renderData(data);
};

fetchList();