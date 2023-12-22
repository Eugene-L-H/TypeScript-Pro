INSERT INTO tasks (name, description, due_date, priority, project_id, checked)
VALUES
    -- Tasks with current day's date
    ('Order groceries online', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', CURRENT_DATE, 1, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Schedule virtual fitness class', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', CURRENT_DATE, 2, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Update LinkedIn profile', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', CURRENT_DATE, 1, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Research online courses for skill development', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.', CURRENT_DATE, 3, (FLOOR(RANDOM() * 5) + 1), FALSE),
    -- Tasks within the next month after the current date
    ('Plan a weekend hiking trip', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of.', CURRENT_DATE + INTERVAL '1 MONTH', 2, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Book Airbnb for next vacation', 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.', CURRENT_DATE + INTERVAL '1 MONTH', 1, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Start a personal blog', 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit.', CURRENT_DATE + INTERVAL '1 MONTH', 2, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Attend a networking event', 'Integer in mauris eu nibh euismod gravida.', CURRENT_DATE + INTERVAL '1 MONTH', 3, (FLOOR(RANDOM() * 5) + 1), FALSE),
    -- Tasks within the next year after the current date
    ('Prepare a healthy meal plan for the week', 'Duis ac tellus et risus vulputate vehicula.', CURRENT_DATE + INTERVAL '1 YEAR', 1, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Watch a webinar on investment strategies', 'Donec lobortis risus a elit. Etiam tempor.', CURRENT_DATE + INTERVAL '1 YEAR', 2, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Clean out email inbox', 'Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis.', CURRENT_DATE + INTERVAL '1 YEAR', 3, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Organize a virtual game night with friends', 'Maecenas fermentum consequat mi. Donec fermentum.', CURRENT_DATE + INTERVAL '1 YEAR', 1, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Research sustainable living tips', 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec.', CURRENT_DATE + INTERVAL '1 YEAR', 2, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Plan a budget for the month', 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing.', CURRENT_DATE + INTERVAL '1 YEAR', 3, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Write a journal entry', 'Cras mollis scelerisque nunc. Nullam arcu.', CURRENT_DATE + INTERVAL '1 YEAR', 1, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Practice a new language on a learning app', 'Integer in mauris eu nibh euismod gravida.', CURRENT_DATE + INTERVAL '1 YEAR', 2, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Backup digital photos and files', 'Duis ac tellus et risus vulputate vehicula.', CURRENT_DATE + INTERVAL '1 YEAR', 3, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Explore new music on streaming platforms', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of.', CURRENT_DATE + INTERVAL '1 YEAR', 1, (FLOOR(RANDOM() * 5) + 1), TRUE),
    ('Create a vision board', 'Maecenas fermentum consequat mi. Donec fermentum.', CURRENT_DATE + INTERVAL '1 YEAR', 2, (FLOOR(RANDOM() * 5) + 1), FALSE),
    ('Sign up for a creative writing workshop', 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec.', CURRENT_DATE + INTERVAL '1 YEAR', 3, (FLOOR(RANDOM() * 5) + 1), FALSE)
;
