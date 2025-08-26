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
        FOREIGN KEY (subject_id) REFERENCES subjects (subject_id)
    );

CREATE TABLE
    users (
        user_id INT GENERATED AS IDENTITY,
        name VARCHAR(50),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_teacher BOOLEAN DEFAULT FALSE
    );

CREATE TABLE
    subjects (
        subject_id INT GENERATED AS IDENTITY,
        subject_name VARCHAR(30),
        PRIMARY KEY (subject_id)
    );

INSERT INTO
    subjects (subject_name)
VALUES
    ('Geography'),
    ('History'),
    ('Languages'),
    ('Sports');

CREATE TABLE
    questions (
        question_id INT GENERATED AS IDENTITY,
        question_text VARCHAR(300),
        subject_id INT,
        PRIMARY KEY (question_id),
        FOREIGN KEY (subject_id) REFERENCES subjects (subject_id)
    );

INSERT INTO
    questions (question_text, subject_id)
VALUES
    ('What is the capital city of Australia?', 1),
    ('Which continent is the Sahara Desert located on?', 1),
    ('Which ocean is the largest?', 1),
    ('What is the smallest country in the world?', 1),
    ('Which country has the highest population?', 1),
    ('Which line divides the Earth into Northern and Southern Hemispheres?', 1),
    ('Which country is known as the "Land of the Rising Sun?"', 1),
    ('The Amazon Rainforest is mainly located in which country?', 1),
    ('What is the world''s highest waterfall?', 1),
    ('What is the capital city of Canada?', 1),
    ('Who built the Great Wall of China?',2),
    ('Who was the first man to walk on the Moon?',2),
    ('What year did World War II end??',2),
    ('Which English king had six wives?',2),
    ('The Titanic sank in which year?',2),
    ('Who was known as the "Maid of Orleans"?',2),
    ('Who discovered America in 1492?',2),
    ('The Berlin Wall fell in what year?',2),
    ('Which pharaoh''s tomb was discovered almost intact in 1922?',2),
    ('The Roman Empire was centred in which modern country?',2),
    ('"Hola" means hello in which language?',3),
    ('Which language has the most words?',3),
    ('"Danke" means thank you in which language?',3),
    ('Which language is spoken in Brazil?',3),
    ('"Ciao" is used for hello and goodbye in which language?',3),
    ('In French, what does "chat" mean?',3),
    ('Which of these is a Slavic language?',3),
    ('What is the official language of Argentina?',3),
    ('How do you say "thank you" in Japanese?',3),
    ('"Which language is written from right to left?',3),
    ('In basketball, how many points is a free throw worth?',4),
    ('What sport uses a shuttlecock?',4),
    ('In which sport would you perform a slam dunk?',4),
    ('How many rings are on the Olympic flag?',4),
    ('Which country won the FIFA World Cup in 2018?',4),
    ('In cricket, how many runs are scored if the ball crosses the boundary without touching the ground?',4),
    ('Who has won the most Olympic gold medals?',4),
    ('Wimbledon is a tournament for which sport?',4),
    ('What is the national sport of Japan?',4),
    ('How many players are there in a rugby union team?',4)


CREATE TABLE
    answers (
        answer_id INT GENERATED AS IDENTITY,
        answer_text VARCHAR(30),
        is_correct BOOLEAN DEFAULT FALSE,
        question_id INT,
        PRIMARY KEY (answer_id),
        FOREIGN KEY (question_id) REFERENCES questions (question_id)
    );

INSERT INTO 
    answers(answer_text, is_correct, question_id)
    VALUES
        -- Q1: What is the capital city of Australia?
        ('Sydney', false,1)
        ('Melbourne', false ,1)
        ('Canberra', true ,1)
        ('Perth', false,1)

        -- Q2: Which continent is the Sahara Desert located on?
        ('Asia', false, 2),
        ('Africa', true, 2),
        ('South America', false, 2),
        ('Australia', false, 2),

        -- Q3: Largest ocean
        ('Atlantic', false, 3),
        ('Indian', false, 3),
        ('Arctic', false, 3),
        ('Pacific', true, 3),

        -- Q4: Smallest country
        ('Monaco', false, 4),
        ('Vatican City', true, 4),
        ('Liechtenstein', false, 4),
        ('San Marino', false, 4),

        -- Q5: Highest population
        ('India', true, 5),
        ('USA', false, 5),
        ('Russia', false, 5),
        ('Brazil', false, 5),

        -- Q6: Line dividing hemispheres
        ('Prime Meridian', false, 6),
        ('Tropic of Cancer', false, 6),
        ('Equator', true, 6),
        ('International Date Line', false, 6),

        -- Q7: Land of the Rising Sun
        ('Japan', true, 7),
        ('China', false, 7),
        ('South Korea', false, 7),
        ('Thailand', false, 7),

        -- Q8: Amazon Rainforest
        ('Brazil', true, 8),
        ('Peru', false, 8),
        ('Colombia', false, 8),
        ('Venezuela', false, 8),

        -- Q9: Highest waterfall
        ('Niagara Falls', false, 9),
        ('Angel Falls', true, 9),
        ('Victoria Falls', false, 9),
        ('Iguazu Falls', false, 9);

        -- Q10: Capital City of Canda
        ('Toronto ', false, 9),
        ('Vancouver', false, 9),
        ('Ottawa ', true, 9),
        ('Montreal', false, 9);




        -- Q1: Great Wall of China
        ('Mongols', false, 1),
        ('Chinese', true, 1),
        ('Japanese', false, 1),
        ('Persians', false, 1),

        -- Q2: First man on the Moon
        ('Yuri Gagarin', false, 2),
        ('Buzz Aldrin', false, 2),
        ('Neil Armstrong', true, 2),
        ('Michael Collins', false, 2),

        -- Q3: End of World War II
        ('1940', false, 3),
        ('1945', true, 3),
        ('1939', false, 3),
        ('1950', false, 3),

        -- Q4: King with six wives
        ('Henry VIII', true, 4),
        ('Richard III', false, 4),
        ('James I', false, 4),
        ('Edward VI', false, 4),

        -- Q5: Titanic sank
        ('1910', false, 5),
        ('1912', true, 5),
        ('1914', false, 5),
        ('1920', false, 5),

        -- Q6: Maid of Orléans
        ('Cleopatra', false, 6),
        ('Joan of Arc', true, 6),
        ('Queen Victoria', false, 6),
        ('Boudica', false, 6),

        -- Q7: Discovered America 1492
        ('Marco Polo', false, 7),
        ('Ferdinand Magellan', false, 7),
        ('Christopher Columbus', true, 7),
        ('Vasco da Gama', false, 7),

        -- Q8: Fall of Berlin Wall
        ('1965', false, 8),
        ('1989', true, 8),
        ('1991', false, 8),
        ('1995', false, 8),

        -- Q9: Pharaoh’s tomb discovered 1922
        ('Ramses II', false, 9),
        ('Tutankhamun', true, 9),
        ('Cleopatra', false, 9),
        ('Akhenaten', false, 9),

        -- Q10: Roman Empire centered
        ('Greece', false, 10),
        ('Italy', true, 10),
        ('Spain', false, 10),
        ('Turkey', false, 10);




        -- Q1: Basketball free throw points
        ('1', true, 1),
        ('2', false, 1),
        ('3', false, 1),
        ('4', false, 1),

        -- Q2: Sport with shuttlecock
        ('Tennis', false, 2),
        ('Badminton', true, 2),
        ('Squash', false, 2),
        ('Table Tennis', false, 2),

        -- Q3: Sport for slam dunk
        ('Rugby', false, 3),
        ('Basketball', true, 3),
        ('Volleyball', false, 3),
        ('Cricket', false, 3),

        -- Q4: Olympic flag rings
        ('4', false, 4),
        ('5', true, 4),
        ('6', false, 4),
        ('7', false, 4),

        -- Q5: FIFA World Cup 2018 winner
        ('Brazil', false, 5),
        ('Germany', false, 5),
        ('France', true, 5),
        ('Argentina', false, 5),

        -- Q6: Cricket boundary without ground touch
        ('2', false, 6),
        ('4', false, 6),
        ('6', true, 6),
        ('8', false, 6),

        -- Q7: Most Olympic gold medals
        ('Usain Bolt', false, 7),
        ('Michael Phelps', true, 7),
        ('Carl Lewis', false, 7),
        ('Nadia Comaneci', false, 7),

        -- Q8: Wimbledon tournament
        ('Golf', false, 8),
        ('Tennis', true, 8),
        ('Cricket', false, 8),
        ('Rugby', false, 8),

        -- Q9: National sport of Japan
        ('Judo', false, 9),
        ('Karate', false, 9),
        ('Sumo Wrestling', true, 9),
        ('Baseball', false, 9),

        -- Q10: Rugby union team players
        ('13', false, 10),
        ('15', true, 10),
        ('11', false, 10),
        ('17', false, 10);












    