// import { Avatar, Badge } from "@mui/material";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492__340.jpg"
                alt="img"
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg"
                alt="img"
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg"
                alt="img"
              />
              <p>
                <span>John Doe</span> Change their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg"
                alt="img"
              />
              <p>
                <span>John Doe</span> Change their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg"
                alt="img"
              />
              <p>
                <span>John Doe</span> Change their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg"
                alt="img"
              />
              <p>
                <span>John Doe</span> Change their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg"
                alt="img"
              />
              <p>
                <span>John Doe</span> Change their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/27/17/51/woman-7551415__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/31/04/55/underpass-7558887__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/12/16/11/evil-2942937__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2021/05/23/15/12/old-woman-6276484__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/04/29/14/28/woman-7163866__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.pixabay.com/photo/2022/09/26/23/26/african-american-7481724__340.jpg"
                alt="img"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
