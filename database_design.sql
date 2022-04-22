CREATE TABLE instagram_accounts(
    account_name varchar(30) PRIMARY KEY UNIQUE NOT NULL,
    account boolean
);

CREATE TABLE ratings(
    account_name varchar(30) UNIQUE NOT NULL REFERENCES instagram_accounts(account_name),
    num_ratings integer,
    rating real
);

CREATE TABLE comments(
    id integer PRIMARY KEY NOT NULL UNIQUE,
    account_name varchar(30) NOT NULL REFERENCES instagram_accounts(account_name),
    comment text
);


INSERT INTO instagram_accounts (account_name, account)
VALUES ('adrien_nav', false);

INSERT INTO ratings (account_name, num_ratings, rating)
VALUES ('adrien_nav', 1, 4.69);

INSERT INTO comments (account_name, comment)
VALUES (1, 'adrien_nav', 'Great man');