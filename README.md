# Ticket Requester Obfuscator

### Description:
This app hides the `to` field in the email composer on the Ticket Details view in Freshdesk as a way to maintain customer privacy.

Creating an agent group within Freshdesk with restricted permissions to contact details will further limit access agents have to PII

Features demonstrated | Notes
-------------------- | ------
App location | ticket_background
Interface API | To hidde ticket properties

### Prerequisites:
1. Make sure you have a trial Freshdesk account created
2. Ensure that you have the Freshworks Developer Kit (FDK) installed properly.


### Procedure to run the app:
1. Fill the `iparam_test_data.json` before running the app locally.
2. Run the app locally using the [`fdk run`](https://developers.freshchat.com/v2/docs/freshworks-cli/#run) command
3. Append `?dev=true` to the Freshworks product URL to see the changes


### Screenshots:
![screenshot](https://user-images.githubusercontent.com/77515518/117514134-05846180-af48-11eb-89aa-5a5bdd920c6e.png)


###### Additional Documentation
- [Freshdesk App Development Platform V2](https://developers.freshdesk.com/v2/docs/quick-start/)
