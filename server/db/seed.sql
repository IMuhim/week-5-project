DROP TABLE IF EXISTS attempts,
users,
questions,
topics,
answers;

CREATE TABLE
    attempts (
        attempt_id INT GENERATED AS IDENTITY,
        start_time INT,
        end_time INT,
        score INT NOT NULL,
        user_id INT,
        subject_id INT,
        PRIMARY KEY (attempt_id),
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (topic_id) REFERENCES topicstopic (topic_id)
    );

-- INSERT INTO attempts(attempt_id, start_time, end_ti INT GENERATED ASDENTITY,
CREATE TABLE
    users (
        name VARCHAR(50) email,
        password,
        is_teacher BOOLEAN DEFAULT FALSE
    );

CREATE TABLE
    subjects (
        subject_ID INT GENERATED AS IDENTITY,
        subject_name INT,
        PRIMARY KEY (subject_ID)
    );

INSERT INTO
    subjects (subject_name)
VALUES
    (Geography),
    (History),
    (Languages),
    (Sports);

CREATE TABLE
    questions (
        question_id INT GENERATED AS IDENTITY,
        question_text VARCHAR(300),
        subject_id INT,
        PRIMARY KEY (question_id),
        FOREIGN KEY (subject_id) REFERENCES subjects (subject_id)
    );

CREATE TABLE
    answers (
        answer_id INT GENERATED AS IDENTITY,
        answer_text VARCHAR(30),
        is_correct BOOLEAN DEFAULT FALSE,
        question_id INT,
        PRIMARY KEY answer_id,
        FOREIGN KEY (question_id) REFERENCES subjects (subject_id)
    );