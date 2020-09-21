const action = {

    alert: (context, textContent) => {
        const formattedText = popup.formatEmotes(textContent, context.emotes, true).substr(7)
        popup.showText(formattedText, alertBg)
    },

    delete: () => {
        popup.delete()
        // TODO : loop through objects calling its own state reset function
    },

    spotlight: (textContent) => {
        spotlightUser = textContent.substr(12).toLowerCase();
        popup.showText(`${spotlightEmoji} Welcome ${spotlightUser} to the stage!`, spotlightBg)
    }
}