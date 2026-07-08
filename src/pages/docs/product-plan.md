# StreamGuard Product Plan

## 1. What problem does StreamGuard solve?

StreamGuard helps streamers and moderators quickly identify, review, and act on unsafe or disruptive chat behavior during a live stream. The goal is to reduce moderation stress and give moderators clear tools for handling harmful messages, spam, harassment, and suspicious users.

## 2. Who are the main users?

Primary users:

- Streamers / channel owners
- Trusted moderators

Secondary users:

- Viewers who report harmful behavior
- Safety admins who review appeals or serious cases

## 3. What are the main workflows?

1. A chat message is submitted.
2. AutoMod reviews the message.
3. If the message is low risk, it appears in chat.
4. If the message is medium or high risk, it is held for moderator review.
5. A moderator reviews the message and user context.
6. The moderator can approve, delete, warn, timeout, or ban.
7. The action is saved in the user’s moderation history.
8. If the user is banned, they may submit an appeal.
9. A safety admin reviews and resolves the appeal.

## 4. What actions can a moderator take?

- Approve a held message
- Delete a message
- Warn a user
- Timeout a user
- Ban a user
- Unban a user
- Add a moderator note
- Escalate a report for review

## 5. What information does a moderator need before taking action?

- Username
- Message being reviewed
- Recent message history
- Account creation date
- Previous actions in this channel
- Number of reports against the user
- Risk score
- AutoMod reason
- Whether the user is new to the channel

## 6. What could go wrong if the dashboard is poorly designed?

A poorly designed dashboard could lead to unfair bans, missed harmful messages, slow response times, moderator confusion, or inconsistent enforcement. Moderators need clear context and easy-to-understand actions so they can make fair decisions quickly.

## 7. What would make this project impressive to an employer?

This project would be impressive if it includes a polished frontend, a real backend, seeded users/messages/reports, a simulated chat system, AutoMod scoring, report workflows, appeal handling, role-based permissions, tests, and clear documentation.

## 8. What is the smallest version of this app that would still be useful?

The smallest useful version is a chat feed where each message has moderation actions: approve, delete, warn, timeout, and ban. Actions should update the message/user status and be saved in moderation history.
