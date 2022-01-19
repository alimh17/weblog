import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction } from "../../../action/friends";
import { friendsPostAction } from "../../../action/friendsPosts";

import { URL } from "../../../utils/config.json";

import style from "../Home.module.css";
import PostOptions from "./components/postOptions/PostOptions";

const PostAllFreinds = React.memo(({ token }) => {
  const [showPostOption, setShowPostOption] = useState([undefined, false]);

  const dark = useSelector((state) => state.darkMode);
  const friends = useSelector((state) => state.friends);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriendsAction(token));
    dispatch(friendsPostAction(token));
  }, []);

  return (
    <>
      {friends.length > 0 && (
        <>
          {friends.map((f, i) => (
            <>
              {f.post.map((p) => (
                <Card className="mx-2 my-2 " key={f._id}>
                  <Card.Text
                    className={`${
                      dark && "text-dark"
                    } d-flex justify-content-between`}
                  >
                    {f.profile.length > 0 && (
                      <div className="w-100 d-flex justify-content-between align-items-center">
                        {f.profile.map((p) => {
                          return (
                            <>
                              <span
                                className={style.options}
                                onClick={() =>
                                  setShowPostOption([f._id, !showPostOption[1]])
                                }
                              >
                                <BiDotsVerticalRounded />
                              </span>
                              <img
                                alt="profileImage"
                                src={URL + p.picture.slice(6)}
                                className={style.profileImg}
                              />
                              <PostOptions
                                showPostOption={showPostOption}
                                setShowPostOption={setShowPostOption}
                                id={f._id}
                              />
                            </>
                          );
                        })}
                      </div>
                    )}
                  </Card.Text>
                  {f.post.map((p) => (
                    <>
                      <Card.Img
                        variant="top"
                        alt="post image"
                        src={`${URL}/${p.file.slice(6, p.lenght)}`}
                        className={style.postImg}
                      />

                      <Card.Body>
                        <Card.Title className={dark && "text-dark"}>
                          {p.title}
                        </Card.Title>
                        <Card.Text className={dark && "text-dark"}>
                          {p.desc}
                        </Card.Text>
                      </Card.Body>
                    </>
                  ))}
                </Card>
              ))}
            </>
          ))}
        </>
      )}
    </>
  );
});

export default PostAllFreinds;
