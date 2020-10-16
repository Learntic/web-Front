import { mapGetters } from 'store';

export const authComputed = {
    ...mapGetters(['loggedIn'])
};