// script.js

function createSocialMediaButtons() {
    // Create a container for the buttons
    var socialMediaContainer = document.createElement('div');
    socialMediaContainer.classList.add('social-media-container');

    // Create Facebook share button
    var facebookButton = createSocialButton('Facebook', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
    socialMediaContainer.appendChild(facebookButton);

    // Create Twitter share button
    var twitterButton = createSocialButton('Twitter', 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent("Check out Veta's Tech Tips for awesome tech advice!"));
    socialMediaContainer.appendChild(twitterButton);

    // Create LinkedIn share button
    var linkedinButton = createSocialButton('LinkedIn', 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent("Veta's Tech Tips") + '&summary=' + encodeURIComponent("Your guide for the latest and most useful tech advice"));
    socialMediaContainer.appendChild(linkedinButton);

    // Append the container to the body
    document.body.appendChild(socialMediaContainer);
}

function createSocialButton(platform, link) {
    // Create button container
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('social-button-container');

    // Create button
    var button = document.createElement('a');
    button.href = link;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.title = 'Share on ' + platform;

    // Create icon
    var icon = document.createElement('img');
    icon.src = platform.toLowerCase() + '-icon.png'; // Assuming your icons are named as "facebook-icon.png", "twitter-icon.png", etc.
    icon.alt = platform + ' Icon';
    icon.width = 30;
    icon.height = 30;

    // Append icon to button
    button.appendChild(icon);

    // Append button to container
    buttonContainer.appendChild(button);

    return buttonContainer;
}

// Call the function to create social media buttons
createSocialMediaButtons();
