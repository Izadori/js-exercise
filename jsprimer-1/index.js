console.log("index.js: loaded.");

const main = async () => {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = createView(userInfo);
    displayView(view);
  }
  catch(error){
    console.error(error);
  };
}

const getUserId = () => {
  return document.getElementById("userId").value;
};

const fetchUserInfo = userId => {
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);
      if(!response.ok){
        return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
      }
      else{
        return response.json();
      }
    });
};

const escapeSpecialChars = str => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/\</g, '&lt;').replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;').replace(/\'/g, '&#039;');
};

const escapeHtml = (strings, ...values) => {
  // reducerはArrayオブジェクトのメソッド
  // 初期値が設定されていないので、iは1から始まる
  return strings.reduce((result, str, i) => {
    const val = values[i - 1];
    if(typeof val == 'string'){
      return result + escapeSpecialChars(val) + str;
    }
    else{
      return result + String(val) + str;
    }
  });
};

const createView = userInfo => {
  // タグ付きテンプレート
  return escapeHtml`
    <h4>${userInfo.name} (@${userInfo.login})</h4>
    <img src="${userInfo.avatar_url}" alt="userInfo.login" height="100">
    <dl>
      <dt>Location</dt>
      <dd>${userInfo.location}</dd>
      <dt>Repositories</dt>
      <dd>${userInfo.public_repos}</dd>
    </dl>
  `;
};

const displayView = view => {
  const docs = document.getElementById("result");
  docs.innerHTML = view;
}
