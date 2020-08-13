Surf Secrets is a social media site for gamers who play a modded version of Counter-Strike: Global Offensive (and CS: Source!). I wanted this site to have functionality like a basic social media account, where people can signup, create posts and react to the posts of other users. They can also customise their profile and create a todo list for surf maps they are looking at competing on. Users are notified if another user likes or comments on their posts.

This site offered me the bulk of my challenges so far, integrating React with firebase was difficult for me at the time, even though I had experience using firebase with Javascript apps. I made the decision to transition from using the standard Firebase SDK in frontend Javascript to using Cloud functions, which meant that I had to understand and implement Node.JS and Express. This was the right decision in terms of making a more viable product for the use case and supports the apps future.

I had a coding friend who mentored me and advised me that if I wanted this to be a long term project, I should transition to typescript. This presented challenges (even though I knew how to set types) with implementing this fully with React/Redux as many of the errors I handled were difficult to understand, I now understand how to set the types for props and state and use interfaces. This site was also my first implementation of Redux, learning about a functioning store with actions and reducers which use Axios pull the data from the cloud functions.

I have been given access to an API for the leading CS:GO / CS:S server so that I can implement player stats from the game into their profiles amongst other functionalities. For the future of this app, I intend to integrate: automatic posts of in-game achievements, ranking system based on performance amongst multiple servers, in-game challenges which are rewarded with site badges. In the distant future, I intend to make a match making system so that players can arrange competitive games and report the score with evidence of the result, but this may require creating my own surf server.
