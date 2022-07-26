import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

// 未完了リストに追加する
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.innerText = text;

  // button完了生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグliを削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素を取得
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;
    // div生成
    const div = document.createElement("div");
    div.innerText = text;
    // button戻す生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグliをCMPLETEリストから削除
      const deleteTarget = backButton.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // addTargetの子要素に設定
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);
    // complete-listに追加
    document.querySelector("#complete-list").appendChild(addTarget);
  });

  // button削除生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグliを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素にdiv,buttonを設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // INCOMPLETEリストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
