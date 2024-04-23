export const mDOM = {
    Sanitizer: trustedTypes.createPolicy('sanitizeHTML', {
        createHTML: (to_sanitized) => to_sanitized
    }),
    DOMEditor: {
        parseHTML: function(data, mime) {
            if (data instanceof TrustedHTML) {
                return new DOMParser().parseFromString(data, mime);
            } else {
                console.log(new DOMParser().parseFromString(mDOM.Sanitizer.createHTML(data), mime))
            }
        }
    }
}
