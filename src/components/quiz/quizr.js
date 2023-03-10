import React from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

export function QuizResults({ quizLength, score, handleReset }) {
  return (
    <>
      <section>
        <IonCard className="quizr-card">
          <IonCardHeader>
            <IonCardTitle> Result</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <h2>Congratulations</h2>
            <p>
              correct {score} out of {quizLength}
            </p>
            <IonButton onClick={handleReset}>Retry</IonButton>
          </IonCardContent>
        </IonCard>
      </section>
    </>
  );
}

