import React from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTitle } from '@ionic/react';

export default function QuizCards({
    quizData,
    questionId,
    handleAnswer,
    quizLength,
}) {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Question {questionId + 1}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <IonTitle className="quiz-card-title">{quizData[questionId].question}</IonTitle>
                <ul className="ion-no-margin">
                    {quizData[questionId].options.map((element, id) => {
                        return (
                            <IonButton
                                key={"option-" + id}
                                onClick={() => handleAnswer(element.isCorrect)}
                                className="ion-margin-vertical"
                                expand="full"
                                shape="round"
                                fill="outline"
                            >
                                {element.answer}
                            </IonButton>
                        );
                    })}
                </ul>
            </IonCardContent>
        </IonCard>
    );
}
