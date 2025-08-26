DROP TABLE IF EXISTS attempts,
users,
questions,
subjects,
answers;

CREATE TABLE
    users (
        user_id INT GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_teacher BOOLEAN DEFAULT FALSE,
        PRIMARY KEY (user_id)

    );

CREATE TABLE
    subjects (
        subject_id INT GENERATED ALWAYS AS IDENTITY,
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
        question_id INT GENERATED ALWAYS AS IDENTITY,
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
    ('What year did World War II end?',2),
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
    ('Which language is written from right to left?',3),
    ('In basketball, how many points is a free throw worth?',4),
    ('What sport uses a shuttlecock?',4),
    ('In which sport would you perform a slam dunk?',4),
    ('How many rings are on the Olympic flag?',4),
    ('Which country won the FIFA World Cup in 2018?',4),
    ('In cricket, how many runs are scored if the ball crosses the boundary without touching the ground?',4),
    ('Who has won the most Olympic gold medals?',4),
    ('Wimbledon is a tournament for which sport?',4),
    ('What is the national sport of Japan?',4),
    ('How many players are there in a rugby union team?',4);


CREATE TABLE
    answers (
        answer_id INT GENERATED ALWAYS AS IDENTITY,
        answer_text VARCHAR(100),
        is_correct BOOLEAN DEFAULT FALSE,
        question_id INT,
        PRIMARY KEY (answer_id),
        FOREIGN KEY (question_id) REFERENCES questions (question_id)
    );

INSERT INTO 
    answers(answer_text, is_correct, question_id)
    VALUES
        -- Q1: What is the capital city of Australia?
        ('Sydney', false,1),
        ('Melbourne', false ,1),
        ('Canberra', true ,1),
        ('Perth', false,1),

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
        ('Iguazu Falls', false, 9),

        -- Q10: Capital City of Canada
        ('Toronto', false, 10),
        ('Vancouver', false, 10),
        ('Ottawa', true, 10),
        ('Montreal', false, 10),




        -- Q1: Great Wall of China
        ('Mongols', false, 11),
        ('Chinese', true, 11),
        ('Japanese', false, 11),
        ('Persians', false, 11),

        -- Q2: First man on the Moon
        ('Yuri Gagarin', false, 12),
        ('Buzz Aldrin', false, 12),
        ('Neil Armstrong', true, 12),
        ('Michael Collins', false, 12),

        -- Q3: End of World War II
        ('1940', false, 13),
        ('1945', true, 13),
        ('1939', false, 13),
        ('1950', false, 13),

        -- Q4: King with six wives
        ('Henry VIII', true, 14),
        ('Richard III', false, 14),
        ('James I', false, 14),
        ('Edward VI', false, 14),

        -- Q5: Titanic sank
        ('1910', false, 15),
        ('1912', true, 15),
        ('1914', false, 15),
        ('1920', false, 15),

        -- Q6: Maid of Orléans
        ('Cleopatra', false, 16),
        ('Joan of Arc', true, 16),
        ('Queen Victoria', false, 16),
        ('Boudica', false, 16),

        -- Q7: Discovered America 1492
        ('Marco Polo', false, 17),
        ('Ferdinand Magellan', false, 17),
        ('Christopher Columbus', true, 17),
        ('Vasco da Gama', false, 17),

        -- Q8: Fall of Berlin Wall
        ('1965', false, 18),
        ('1989', true, 18),
        ('1991', false, 18),
        ('1995', false, 18),

        -- Q9: Pharaoh’s tomb discovered 1922
        ('Ramses II', false, 19),
        ('Tutankhamun', true, 19),
        ('Cleopatra', false, 19),
        ('Akhenaten', false, 19),

        -- Q10: Roman Empire centered
        ('Greece', false, 20),
        ('Italy', true, 20),
        ('Spain', false, 20),
        ('Turkey', false, 20),



        ('French',false,21),
        ('Spanish',true,21),
        ('Italian',false,21),
        ('Portuguese',false,21),

        ('French',false,22),
        ('English',true,22),
        ('German',false,22),
        ('Russian',false,22),

        ('Spanish',false,23),
        ('German',true,23),
        ('Italian',false,23),
        ('Dutch',false,23),

        ('Spanish',false,24),
        ('Portuguese',true,24),
        ('French',false,24),
        ('English',false,24),

        ('Italian',true,25),
        ('Spanish',false,25),
        ('Greek',false,25),
        ('Polish',false,25),

        ('Dog',false,26),
        ('Cat',true,26),
        ('Bird',false,26),
        ('Mouse',false,26),

        ('Polish',true,27),
        ('Spanish',false,27),
        ('Italian',false,27),
        ('Turkish',false,27),

        ('Portuguese',false,28),
        ('Spanish',true,28),
        ('English',false,28),
        ('French',false,28),

        ('Ni hao',false,29),
        ('Konnichiwa',false,29),
        ('Arigato',true,29),
        ('Sayonara',false,29),

        ('English',false,30),
        ('Arabic',true,30),
        ('Russian',false,30),
        ('Hindi',false,30),

        -- Q1: Basketball free throw points
        ('1', true, 31),
        ('2', false, 31),
        ('3', false, 31),
        ('4', false, 31),

        -- Q2: Sport with shuttlecock
        ('Tennis', false, 32),
        ('Badminton', true, 32),
        ('Squash', false, 32),
        ('Table Tennis', false, 32),

        -- Q3: Sport for slam dunk
        ('Rugby', false, 33),
        ('Basketball', true, 33),
        ('Volleyball', false, 33),
        ('Cricket', false, 33),

        -- Q4: Olympic flag rings
        ('4', false, 34),
        ('5', true, 34),
        ('6', false, 34),
        ('7', false, 34),

        -- Q5: FIFA World Cup 2018 winner
        ('Brazil', false, 35),
        ('Germany', false, 35),
        ('France', true, 35),
        ('Argentina', false, 35),

        -- Q6: Cricket boundary without ground touch
        ('2', false, 36),
        ('4', false, 36),
        ('6', true, 36),
        ('8', false, 36),

        -- Q7: Most Olympic gold medals
        ('Usain Bolt', false, 37),
        ('Michael Phelps', true, 37),
        ('Carl Lewis', false, 37),
        ('Nadia Comaneci', false, 37),

        -- Q8: Wimbledon tournament
        ('Golf', false, 38),
        ('Tennis', true, 38),
        ('Cricket', false, 38),
        ('Rugby', false, 38),

        -- Q9: National sport of Japan
        ('Judo', false, 39),
        ('Karate', false, 39),
        ('Sumo Wrestling', true, 39),
        ('Baseball', false, 39),

        -- Q10: Rugby union team players
        ('13', false, 40),
        ('15', true, 40),
        ('11', false, 40),
        ('17', false, 40);


CREATE TABLE
    attempts (
        attempt_id INT GENERATED ALWAYS AS IDENTITY,
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        score INT DEFAULT 0,
        user_id INT,
        subject_id INT,
        PRIMARY KEY (attempt_id),
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (subject_id) REFERENCES subjects (subject_id)
    );











    