const removeClick = (event) => {
    // 削除するボタンの処理
    event.currentTarget.parentNode.parentNode.remove();
}

const addClick = () => {
    if (document.getElementById("add_date").value == "") {
        alert("日付が設定されていません");
        return;
    }

    if (document.getElementById("add_text").value == "") {
        alert("予定が設定されていません");
        return;
    }
    // 行
    let newRow = document.createElement("tr");
    // 日付
    let dateTd = document.createElement("td");
    // 予定
    let contentTd = document.createElement("td");
    // 削除
    let removeTd = document.createElement("td");
    // 削除ボタン
    let removeButton = document.createElement("input");
    removeButton.setAttribute("type", "button");
    removeButton.value = "削除";
    removeButton.onclick = removeClick;
    
    // TDの中身を設定
    dateTd.innerText = document.getElementById("add_date").value;
    contentTd.innerText = document.getElementById("add_text").value;
    removeTd.appendChild(removeButton);

    // TRへTDを追加
    newRow.appendChild(dateTd);
    newRow.appendChild(contentTd);
    newRow.appendChild(removeTd);

    document.getElementById("table_body").appendChild(newRow);
    document.getElementById("add_text").value = "";
    document.getElementById("add_date").value = "";
}

onload = () => {
    document.getElementById("add_button").onclick = addClick;
}