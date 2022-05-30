import React, { useState, useEffect } from "react";
import agency from "../img/agency.jpg";
import "./Main.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import axios, { Axios } from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [languageList, setLanguageList] = useState([]);
  const [selectedLanguageKey, setSelectedLanguageKey] = useState("");
  const [detectLanguageKey, setDetectLanguageKey] = useState("");
  const [resultText, setResultText] = useState("");
  const [copied, setCopied] = useState(false);

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: inputText,
      })
      .then((response) => {
        setDetectLanguageKey(response.data[0].language);
      });
  };

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguageList(response.data);
    });

    getLanguageSource();
  }, [inputText]);

  // const languageSelect = (e) => {
  //   setSelectedLanguageKey(e.target.value);
  // };

  const translateText = (e) => {
    e.preventDefault();

    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    };

    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      setResultText(response.data.translatedText);
    });
  };

  console.log(selectedLanguageKey);
  console.log(detectLanguageKey);

  return (
    <div className="main__container container text-light p-2 row">
      <div className="main__leftContainer col-lg-6 d-flex px-3 flex-column">
        <img src={agency} alt="agency image" className="my-5 rounded-3" />
        <h1>Say no more to language hassle</h1>
        <p className="py-3">
          Professional translation scaled by technology and enhance by human
        </p>
      </div>

      {/* form section */}
      <div className="main__rightContainer col-lg-6 d-flex px-lg-5 flex-column">
        <h1 className="mb-5">Language Translator</h1>

        <form action="">
          <div className="right__translation d-flex p-2 flex-column">
            <div className="d-flex translate__select">
              <select
                class="form-select text-light bg-secondary rounded-0"
                disabled
              >
                <option>English</option>
              </select>
              <span className="text-white align-middle bg-secondary border-start border-end px-4">
                <BsBoxArrowInRight style={{ fontSize: 18 }} />
              </span>
              <select
                class="form-select bg-secondary  text-light rounded-0"
                onChange={(e) => setSelectedLanguageKey(e.target.value)}
              >
                {languageList.map((language, index) => {
                  return (
                    <option value={language.code} key={index}>
                      {language.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* input group */}
            <textarea
              class="form-control bg-dark textarea border-0"
              rows="5"
              id="comment"
              value={inputText}
              placeholder="Type to translate"
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>

          {/* translated text */}
          <h2 className="my-4">Translation</h2>
          <div className="right__translation">
            <div
              className="translated__text bg-dark px-3 py-4 rounded-3 d-flex flex-column justify-content-between"
              style={{ minHeight: 150 }}
            >
              <p>
                {resultText ||
                  "Professional translation scaled by technology and enhance by human"}
              </p>
              <div class="clearfix">
                <CopyToClipboard
                  text={resultText}
                  onCopy={() => setCopied(true)}
                >
                  <span class="float-end">
                    Copy text <MdOutlineContentCopy />
                  </span>
                </CopyToClipboard>
                {copied ? <span style={{ color: "dark" }}>Copied.</span> : null}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-danger mt-4 w-100"
            onClick={translateText}
          >
            Translate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
