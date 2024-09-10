import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { LayeredDarkPanelless } from "survey-core/themes";

const QuizCreator = () => {

      const options = {
          showLogicTab: true,
          showThemeTab: true
      };
      const creator = new SurveyCreator(options);

      creator.onUploadFile.add(function (_, options) {
          const formData = new FormData();
      
          options.files.forEach(function (file) {
              formData.append(file.name, file);
          });
          fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
              method: "post",
              body: formData
          }).then((response) => response.json())
              .then((result) => {
                  options.callback(
                      "success",
                      // A link to the uploaded file
                      "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + result[options.files[0].name]
                  );
              })
              .catch((error) => {
                  options.callback('error');
              });
      });
      
      creator.JSON = {
          "elements": [
              {
                  "type": "image",
                  "name": "question1",
                  "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "type": "text",
                "name": "question2"
            },
            {
              "type": "text",
              "name": "question3",
              "isRequired": true
          },
          {
            "type": "checkbox",
            "name": "question4",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ],
            "maxSelectedChoices": 1,
            "minSelectedChoices": 1
          }
          ]
      };
      
    
    creator.theme = LayeredDarkPanelless  
      return (<SurveyCreatorComponent creator={creator} />);
  }
  
export default QuizCreator